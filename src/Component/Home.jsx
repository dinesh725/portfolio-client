import { useEffect, useState, useRef } from "react";
import "./Home.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const text = "Frontend Web Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [colorHue, setColorHue] = useState(0);
  const API_BASE = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || '';
  const CV_URL = `${API_BASE}/cv`;
  const [cvHref, setCvHref] = useState(CV_URL || '/web1.pdf');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [password, setPassword] = useState("");
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  const [cvMsg, setCvMsg] = useState("");
  const [cvErr, setCvErr] = useState("");

  useEffect(() => {
    setCvHref(CV_URL || '/web1.pdf');
  }, [API_BASE]);

  const onPickCV = () => fileInputRef.current?.click();

  const onFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setShowUploadPanel(true);
    setCvMsg("");
    setCvErr("");
  };

  const doUpload = async () => {
    if (!selectedFile) return;
    if (!password) {
      setCvErr('Please enter the admin password.');
      return;
    }
    const form = new FormData();
    form.append('file', selectedFile);
    setUploading(true);
    setCvMsg("");
    setCvErr("");
    try {
      const res = await fetch(CV_URL, {
        method: 'POST',
        headers: { 'x-cv-password': password },
        body: form,
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || 'Upload failed');
      }
      setCvHref(CV_URL);
      setCvMsg('CV uploaded successfully.');
      // reset panel
      setSelectedFile(null);
      setPassword("");
      setShowUploadPanel(false);
    } catch (err) {
      setCvErr(err.message || 'Failed to upload CV');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const cancelUpload = () => {
    setSelectedFile(null);
    setPassword("");
    setShowUploadPanel(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setCvMsg("");
    setCvErr("");
  };

  useEffect(() => {
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const pauseBeforeErase = 2000;
    const pauseBeforeType = 500;

    if (!isErasing) {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, index + 1));
          setIndex(prev => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsErasing(true), pauseBeforeErase);
        return () => clearTimeout(timeout);
      }
    } else {
      if (index > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, index - 1));
          setIndex(prev => prev - 1);
        }, erasingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsErasing(false);
          setIndex(0);
        }, pauseBeforeType);
        return () => clearTimeout(timeout);
      }
    }
  }, [index, isErasing]);

  useEffect(() => {
    if (!isErasing && index === text.length) {
      const glowInterval = setInterval(() => {
        setColorHue(prev => (prev + 1) % 360);
        setGlowIntensity(prev => Math.abs(Math.sin(Date.now() / 300)) * 0.4);
      }, 50);
      
      return () => clearInterval(glowInterval);
    } else {
      setGlowIntensity(0);
    }
  }, [index, isErasing]);

  return (
    <section className="home" id="home">
      <Helmet>
        <title>Dinesh Khatua | Frontend Developer</title>
      </Helmet>
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>DINESH KHATUA</h1>

        <div className="text">
          <h3>
            And I'm a
            <span className="animated-text">
              {displayText.split('').map((char, i) => {
                const isLastChar = i === displayText.length - 1;
                const shouldShowShadow = isLastChar && (index !== text.length || isErasing);
                
                return (
                  <span
                    key={i}
                    className={shouldShowShadow ? 'shadow' : 'solid'}
                    style={{
                      textShadow: `
                        0 0 ${10 * glowIntensity}px hsla(${colorHue},80%,50%,0.8),
                        0 0 ${20 * glowIntensity}px hsla(${colorHue + 60},80%,50%,0.6)
                      `,
                      color: glowIntensity > 0 
                        ? `hsl(${colorHue}, 80%, 70%)` 
                        : 'inherit'
                    }}
                  >
                    {char}
                  </span>
                );
              })}
              <span className="cursor">|</span>
            </span>
          </h3>
        </div>

        <p>
          Passionate about blending technical expertise with artistic innovation to craft visually stunning, 
          user-centric web experiences. With a strong foundation in HTML5, CSS3, JavaScript (ES6+),
          and modern libraries like ReactJS, I thrive on transforming abstract ideas into dynamic, responsive, 
          and intuitive digital solutions. My work is driven by a keen eye for design, a love for clean code, 
          and a commitment to seamless user interactions.
        </p>

        <div className="btn-row">
          <a href={cvHref} className="btn" download>
            <b>Download CV</b>
          </a>
          <button type="button" className="btn-icon" title="Replace CV" onClick={onPickCV} disabled={uploading}>
            {uploading ? '…' : '+'}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            style={{ display: 'none' }}
            onChange={onFileChange}
          />
        </div>

        {showUploadPanel && (
          <div className="cv-upload-inline">
            <span className="cv-file-name">{selectedFile?.name}</span>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="cv-password-input"
            />
            <button type="button" className="btn" onClick={doUpload} disabled={uploading}>
              {uploading ? 'Uploading…' : 'Upload'}
            </button>
            <button type="button" className="btn ghost" onClick={cancelUpload} disabled={uploading}>
              Cancel
            </button>
          </div>
        )}
        {(cvMsg || cvErr) && (
          <div className={`cv-msg ${cvErr ? 'error' : 'ok'}`}>
            {cvErr || cvMsg}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
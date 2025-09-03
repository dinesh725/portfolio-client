import { useEffect, useRef } from "react"
import "./AnimatedBackground.css"

const AnimatedBackground = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Create particles
    const particles = []
    const particleCount = 300
    const shapes = ["circle", "triangle", "square", "kite"]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 2,
        color: `rgba(14, 255, 255, ${Math.random() * 0.5 + 0.1})`,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: 0,
        rotationSpeed: Math.random() * 0.1 - 0.05,
        tailPoints: [],
        tailLength: Math.floor(Math.random() * 15) + 5,
        zigzag: Math.random() > 0.7,
        zigzagTimer: 0,
      })
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // If particle is close to mouse, move towards it
        if (distance < 200) {
          particle.x += dx * 0.05
          particle.y += dy * 0.05
        } else {
          // Regular movement
          if (particle.zigzag) {
            particle.zigzagTimer += 0.1
            particle.x += particle.speedX + Math.sin(particle.zigzagTimer) * 2
            particle.y += particle.speedY + Math.cos(particle.zigzagTimer) * 2
          } else {
            particle.x += particle.speedX
            particle.y += particle.speedY
          }
        }

        // Update tail
        particle.tailPoints.unshift({ x: particle.x, y: particle.y })
        if (particle.tailPoints.length > particle.tailLength) {
          particle.tailPoints.pop()
        }

        // Draw tail with shadow effect
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        for (let i = 0; i < particle.tailPoints.length; i++) {
          ctx.lineTo(particle.tailPoints[i].x, particle.tailPoints[i].y)
        }
        ctx.strokeStyle = particle.color
        ctx.lineWidth = particle.radius / 2
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.shadowColor = particle.color
        ctx.shadowBlur = 5
        ctx.stroke()
        ctx.shadowBlur = 0

        // Draw particle
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)

        ctx.beginPath()
        switch (particle.shape) {
          case "circle":
            ctx.arc(0, 0, particle.radius, 0, Math.PI * 2)
            break
          case "triangle":
            ctx.moveTo(0, -particle.radius)
            ctx.lineTo(-particle.radius, particle.radius)
            ctx.lineTo(particle.radius, particle.radius)
            ctx.closePath()
            break
          case "square":
            ctx.rect(-particle.radius, -particle.radius, particle.radius * 2, particle.radius * 2)
            break
          case "kite":
            ctx.moveTo(0, -particle.radius * 1.5)
            ctx.lineTo(-particle.radius, 0)
            ctx.lineTo(0, particle.radius * 1.5)
            ctx.lineTo(particle.radius, 0)
            ctx.closePath()
            break
        }
        ctx.fillStyle = particle.color
        ctx.fill()
        ctx.restore()

        particle.rotation += particle.rotationSpeed

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initial setup
    setCanvasSize()
    animate()

    // Event listeners
    window.addEventListener("resize", setCanvasSize)
    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="animated-background"></canvas>
}

export default AnimatedBackground

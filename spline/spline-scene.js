
        import { Application } from 'https://esm.sh/@splinetool/runtime';

        const SCENE_URL = 'https://prod.spline.design/Rpj1GjUKqFdL35uS/scene.splinecode';

        // ─── Elements ────────────────────────────────────────────────
        const canvas = document.getElementById('canvas3d');
        const loader = document.getElementById('splineLoader');
        const heroSection = document.getElementById('hero');

        // ─── Initialize Spline ───────────────────────────────────────
        const spline = new Application(canvas);

        spline.load(SCENE_URL).then(() => {
            console.log('✅ Spline scene loaded');

            // Smooth fade: hide loader, reveal canvas
            loader.classList.add('hidden');
            canvas.classList.add('loaded');

            // ─── Mouse Parallax / Tilt ────────────────────────────────
            // Subtle rotation that follows the cursor position.
            // We rotate the entire scene by adjusting all root-level
            // objects' rotation proportionally to cursor offset.
            const allObjects = spline.getAllObjects();

            // Store original rotations
            const originals = allObjects.map(obj => ({
                ref: obj,
                rx: obj.rotation.x,
                ry: obj.rotation.y
            }));

            // Smoothing via lerp
            let targetRX = 0;
            let targetRY = 0;
            let currentRX = 0;
            let currentRY = 0;
            const INTENSITY = 0.15;  // max rotation in radians (~8.5°)
            const SMOOTHING = 0.05;  // lerp factor (lower = smoother)

            // Track mouse position relative to hero section
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                // Normalize to -1...1
                const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                const normalizedY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

                targetRY = normalizedX * INTENSITY;
                targetRX = -normalizedY * INTENSITY;
            });

            // Reset when mouse leaves the hero
            heroSection.addEventListener('mouseleave', () => {
                targetRX = 0;
                targetRY = 0;
            });

            // Animation loop for smooth interpolation
            function animate() {
                currentRX += (targetRX - currentRX) * SMOOTHING;
                currentRY += (targetRY - currentRY) * SMOOTHING;

                originals.forEach(({ ref, rx, ry }) => {
                    ref.rotation.x = rx + currentRX;
                    ref.rotation.y = ry + currentRY;
                });

                requestAnimationFrame(animate);
            }

            // Only enable parallax on devices with a mouse
            if (window.matchMedia('(hover: hover)').matches) {
                animate();
            }

        }).catch((err) => {
            console.error('❌ Spline load failed:', err);
            // On failure, hide loader and show a subtle fallback
            loader.innerHTML = '<span class="loader-text" style="color: var(--text-dim);">3D scene unavailable</span>';
        });

        
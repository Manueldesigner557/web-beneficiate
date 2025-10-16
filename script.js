// Sistema de toggle para planes (Familiar e Individual)
document.addEventListener('DOMContentLoaded', function() {
    
    // Datos de los planes
    const planesData = {
        familiar: {
            icon: '👪',
            title: 'Plan Familiar',
            subtitle: 'Titular + 4 Familiares',
            description: 'Por solo <strong>$1.300 diarios</strong>, accede a más de 3.200 prestadores de salud en 55 ciudades de Colombia.',
            features: [
                'Sin límites de edad.',
                'Sin preexistencias.',
                'Sin carencias.'                
            ],
            price: '$480.000',
            image: 'images/family-photo.png',
            imageAlt: 'Familia feliz'
        },
        individual: {
            icon: '🧍‍♂️',
            title: 'Plan Individual',
            subtitle: 'Cobertura Personal',
            description: 'Por solo <strong>$750 diarios</strong>, disfruta de cobertura médica completa con acceso a más de 3.200 prestadores en todo el país.',
            features: [
                'Sin límites de edad.',
                'Sin preexistencias.',
                'Sin carencias.',
                'Pago unico o financia con sistecrédito'
            ],
            price: '$250.000',
            image: 'images/individual-photo.png',
            imageAlt: 'Persona saludable'
        }
    };
    
    // Seleccionar elementos del DOM
    const planTabs = document.querySelectorAll('.plan-tab');
    const planDetails = document.querySelector('.plan-details');
    
    // Función para actualizar el contenido del plan
    function actualizarPlan(tipoPlan) {
        const plan = planesData[tipoPlan];
        
        // Generar HTML de características
        const featuresHTML = plan.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');
        
        // Actualizar el contenido
        planDetails.innerHTML = `
            <div class="plan-info">
                <div class="plan-check-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="4" fill="#A4D070"/>
                        <path d="M12 20L18 26L28 14" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="plan-text">
                    <h3>${plan.title}</h3>
                    <p class="plan-subtitle">${plan.subtitle}</p>
                    
                    <p class="plan-description">${plan.description}</p>
                    
                    <ul class="plan-features">
                        ${featuresHTML}
                    </ul>
                    
                    <div class="plan-price">${plan.price}</div>
                </div>
                <div class="plan-image">
                    <img src="${plan.image}" alt="${plan.imageAlt}">
                    <a href="https://wa.me/573043520351" class="plan-cta">
                        <i class="fab fa-whatsapp"></i> Quiero Afiliarme
                    </a>
                </div>
            </div>
        `;
        
        // Agregar animación de entrada
        planDetails.style.opacity = '0';
        setTimeout(() => {
            planDetails.style.transition = 'opacity 0.3s ease';
            planDetails.style.opacity = '1';
        }, 50);
    }
    
    // Event listeners para las pestañas
    planTabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // Remover clase active de todas las pestañas
            planTabs.forEach(t => t.classList.remove('active'));
            
            // Agregar clase active a la pestaña seleccionada
            this.classList.add('active');
            
            // Determinar qué plan mostrar
            const tipoPlan = index === 0 ? 'familiar' : 'individual';
            
            // Actualizar el contenido
            actualizarPlan(tipoPlan);
        });
    });
    
    // Inicializar con el plan familiar (activo por defecto)
    actualizarPlan('familiar');
    
    // Funcionalidad para los botones de reproducción de video (mantenida del código original)
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Reproduciendo video de testimonio...');
            // Aquí se implementaría la lógica real para reproducir videos
        });
    });
});
document.querySelectorAll('.testimonio-video video').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play(); // reproducirá solo si está sin audio o el usuario ya interactuó antes
    });
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });

    // Permitir sonido al hacer clic
    video.addEventListener('click', () => {
        video.muted = false;
        video.play();
    });
});

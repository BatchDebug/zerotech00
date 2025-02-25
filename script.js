document.addEventListener('DOMContentLoaded', function() {
    // Add click animation
    const links = document.querySelectorAll('.link');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });
    
    // Add slight animation to the profile image on load
    const profileImage = document.querySelector('.profile-image');
    setTimeout(() => {
        profileImage.style.transform = 'scale(1.05)';
        setTimeout(() => {
            profileImage.style.transform = 'scale(1)';
        }, 300);
    }, 500);
    
    // Add subtle hover effect for the powered-by link
    const poweredLink = document.querySelector('.powered-link');
    if (poweredLink) {
        poweredLink.addEventListener('mouseenter', function() {
            this.style.textDecoration = 'underline';
        });
        poweredLink.addEventListener('mouseleave', function() {
            this.style.textDecoration = 'none';
        });
    }
});

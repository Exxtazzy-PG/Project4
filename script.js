// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const heartBtn = document.getElementById('heartBtn');
const readMoreBtn = document.getElementById('readMoreBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// Search functionality
let isSearchOpen = false;

searchBtn.addEventListener('click', function() {
    isSearchOpen = !isSearchOpen;
    
    if (isSearchOpen) {
        searchContainer.classList.add('active');
        searchInput.focus();
    } else {
        searchContainer.classList.remove('active');
    }
});

// Close search when clicking outside
document.addEventListener('click', function(event) {
    if (!searchContainer.contains(event.target) && !searchBtn.contains(event.target)) {
        searchContainer.classList.remove('active');
        isSearchOpen = false;
    }
});

// Heart functionality
let isHeartLiked = false;

heartBtn.addEventListener('click', function() {
    isHeartLiked = !isHeartLiked;
    
    if (isHeartLiked) {
        heartBtn.classList.add('heart-liked');
    } else {
        heartBtn.classList.remove('heart-liked');
    }
});

// Modal functionality
readMoreBtn.addEventListener('click', function() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

modalClose.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
});

modalCloseBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Smooth animations on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Product data
const products = {
    smartwatch: {
        title: "Smart Watch Pro",
        category: "ONLINE STORE",
        price: "$299.00",
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life. Perfect for fitness enthusiasts and tech lovers."
    },
    console: {
        title: "Xbox One Gaming Console",
        category: "NEW ITEMS",
        price: "$499.00",
        image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Next-generation gaming console with 4K gaming, ultra-fast SSD, and exclusive game library. Experience gaming like never before."
    },
    headphones: {
        title: "Wireless Headphones",
        category: "ONLINE STORE",
        price: "$199.00",
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Premium wireless headphones with active noise cancellation and 30-hour battery life. Crystal clear audio quality."
    },
    smartwatch2: {
        title: "Smart Watch Elite",
        category: "NEW ITEMS",
        price: "$449.00",
        image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Premium smartwatch with cellular connectivity, advanced health sensors, and premium materials."
    },
    smartphone: {
        title: "Digital Projector",
        category: "ELECTRONICS",
        price: "$99.00",
        image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "High-quality digital projector perfect for presentations and home entertainment."
    },
    "bluetooth-headphones": {
        title: "Bluetooth Headphones",
        category: "AUDIO",
        price: "$199.00",
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Comfortable wireless headphones with superior sound quality and long-lasting battery."
    },
    "gaming-controller": {
        title: "Logitech XBOX Control",
        category: "GAMING",
        price: "$89.00",
        image: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Precision gaming controller with customizable buttons and haptic feedback."
    },
    camera: {
        title: "DSLR Eos",
        category: "PHOTOGRAPHY",
        price: "$1299.00",
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Professional DSLR camera with 24MP sensor and 4K video recording capabilities."
    },
    earbuds: {
        title: "Cancelling Headphones",
        category: "AUDIO",
        price: "$179.00",
        image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "True wireless earbuds with noise cancellation and premium sound quality."
    },
    mouse: {
        title: "ASUS Mouse 15",
        category: "GAMING",
        price: "$89.00",
        image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Precision gaming mouse with customizable RGB lighting and programmable buttons."
    },
    monitor: {
        title: "Alienware Laptops",
        category: "COMPUTERS",
        price: "$1999.00",
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "High-performance gaming laptop with advanced graphics and ultra-fast processor."
    },
    tablet: {
        title: "Full HD Touchscreen",
        category: "TABLETS",
        price: "$799.00",
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Professional tablet with powerful processor and stunning display for creativity and productivity."
    }
};

// Modal functions
function openModal(productId) {
    const product = products[productId];
    if (!product) return;
    
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.title;
    
    document.getElementById('productModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
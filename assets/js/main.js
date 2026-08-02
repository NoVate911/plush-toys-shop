/**
 * Plushie Shop - Main JavaScript
 * Модульная структура для легкого расширения
 */

// ==============================
// DATA
// ==============================
const productsData = [
    {
        id: 1,
        name: 'Мишка Тедди',
        category: 'bears',
        categoryName: 'Мишки',
        price: 2490,
        rating: 4.9,
        reviews: 128,
        badge: 'Бестселлер',
        image: 'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=600&h=600&fit=crop',
        description: 'Классический плюшевый мишка в винтажном стиле. Мягкий как облако, с вышитым носиком и шелковым бантом.',
        features: ['Высота 35 см', 'Гипоаллергенный наполнитель', 'Ручная сборка']
    },
    {
        id: 2,
        name: 'Зайка Луна',
        category: 'bunnies',
        categoryName: 'Зайчики',
        price: 1890,
        rating: 4.8,
        reviews: 96,
        badge: 'Новинка',
        image: 'https://images.unsplash.com/photo-1585155770447-2f66e2a397bd?w=600&h=600&fit=crop',
        description: 'Нежный зайчик в пастельных тонах с длинными ушками. Идеальный друг для сна и уюта.',
        features: ['Высота 30 см', 'Супер-мягкий мех', 'Съемный комбинезон']
    },
    {
        id: 3,
        name: 'Котик Маршмеллоу',
        category: 'cats',
        categoryName: 'Котики',
        price: 2190,
        rating: 4.7,
        reviews: 84,
        badge: null,
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop',
        description: 'Пушистый котенок белого цвета, словно сделанный из сахарной ваты. Очаровательный и нежный.',
        features: ['Высота 28 см', 'Плюшевый мех премиум', 'Безопасные глазки']
    },
    {
        id: 4,
        name: 'Дракончик Смоки',
        category: 'fantasy',
        categoryName: 'Фэнтези',
        price: 3290,
        rating: 5.0,
        reviews: 62,
        badge: 'Хит',
        image: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=600&h=600&fit=crop',
        description: 'Маленький дракон с переливающимися крылышками. Хранитель сказочных снов.',
        features: ['Высота 40 см', 'Крылышки с блестками', 'Индивидуальный дизайн']
    },
    {
        id: 5,
        name: 'Мишка Медовик',
        category: 'bears',
        categoryName: 'Мишки',
        price: 2790,
        rating: 4.8,
        reviews: 74,
        badge: null,
        image: 'https://images.unsplash.com/photo-1570458436416-b8fcccce8c9a?w=600&h=600&fit=crop',
        description: 'Теплый коричневый мишка с бочонком меда. Напоминает солнечные летние дни.',
        features: ['Высота 32 см', 'Аксессуар: бочонок', 'Машинная стирка']
    },
    {
        id: 6,
        name: 'Зайка Берри',
        category: 'bunnies',
        categoryName: 'Зайчики',
        price: 1990,
        rating: 4.6,
        reviews: 58,
        badge: null,
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop',
        description: 'Ягодный зайчик с розовыми ушками и пушистым хвостиком. Сладкий подарок для маленькой принцессы.',
        features: ['Высота 26 см', 'Яркий дизайн', 'Легкий в уходе']
    },
    {
        id: 7,
        name: 'Котик Мурчик',
        category: 'cats',
        categoryName: 'Котики',
        price: 1690,
        rating: 4.7,
        reviews: 103,
        badge: 'Бестселлер',
        image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop',
        description: 'Серый полосатый котик, который всегда готов к обнимашкам. Мурлыкает без звука.',
        features: ['Высота 25 см', 'Реалистичный окрас', 'Мягкие лапки']
    },
    {
        id: 8,
        name: 'Единорог Радуга',
        category: 'fantasy',
        categoryName: 'Фэнтези',
        price: 2890,
        rating: 4.9,
        reviews: 89,
        badge: 'Новинка',
        image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=600&h=600&fit=crop',
        description: 'Волшебный единорог с разноцветной гривой и золотым рогом. Приносит радость и волшебство.',
        features: ['Высота 38 см', 'Радужная грива', 'Светоотражающие элементы']
    }
];

const reviewsData = [
    {
        id: 1,
        name: 'Анна М.',
        avatar: 'А',
        rating: 5,
        text: 'Заказывали мишку Тедди на день рождения дочери. Качество просто невероятное! Мягкий, красивый, упакован с любовью.',
        date: '15 июля 2026'
    },
    {
        id: 2,
        name: 'Дмитрий К.',
        avatar: 'Д',
        rating: 5,
        text: 'Брал дракончика в подарок жене. Она в восторге! Детали продуманы до мелочей, материалы приятные на ощупь.',
        date: '3 июля 2026'
    },
    {
        id: 3,
        name: 'Елена В.',
        avatar: 'Е',
        rating: 4,
        text: 'Очень милый зайка, доставка быстрая. Единственное — хотелось бы больше цветов на выбор.',
        date: '28 июня 2026'
    },
    {
        id: 4,
        name: 'Сергей П.',
        avatar: 'С',
        rating: 5,
        text: 'Покупаем здесь игрушки уже второй год. Всегда отличное качество и внимательное отношение к клиентам.',
        date: '20 июня 2026'
    },
    {
        id: 5,
        name: 'Мария Л.',
        avatar: 'М',
        rating: 5,
        text: 'Единорог Радуга — это любовь с первого взгляда! Дочь не расстается с ним ни днем, ни ночью.',
        date: '12 июня 2026'
    }
];

// ==============================
// STATE
// ==============================
const state = {
    cart: JSON.parse(localStorage.getItem('plushieCart')) || [],
    currentFilter: 'all',
    reviewsIndex: 0,
    isMenuOpen: false,
    isCartOpen: false
};

// ==============================
// DOM ELEMENTS
// ==============================
const elements = {
    header: document.getElementById('header'),
    nav: document.getElementById('nav'),
    menuToggle: document.getElementById('menuToggle'),
    mobileMenu: document.getElementById('mobileMenu'),
    cartBtn: document.getElementById('cartBtn'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartClose: document.getElementById('cartClose'),
    cartCount: document.getElementById('cartCount'),
    cartBody: document.getElementById('cartBody'),
    cartItems: document.getElementById('cartItems'),
    cartEmpty: document.getElementById('cartEmpty'),
    cartFooter: document.getElementById('cartFooter'),
    cartTotal: document.getElementById('cartTotal'),
    productsGrid: document.getElementById('productsGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    reviewsTrack: document.getElementById('reviewsTrack'),
    reviewsPrev: document.getElementById('reviewsPrev'),
    reviewsNext: document.getElementById('reviewsNext'),
    toastContainer: document.getElementById('toastContainer'),
    productModal: document.getElementById('productModal'),
    productModalOverlay: document.getElementById('productModalOverlay'),
    productModalClose: document.getElementById('productModalClose'),
    productModalBody: document.getElementById('productModalBody'),
    contactForm: document.getElementById('contactForm'),
    cursorGlow: document.querySelector('.cursor-glow'),
    heroImage: document.getElementById('heroImage')
};

// ==============================
// UTILITIES
// ==============================
const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
};

const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) stars += '★';
    if (hasHalf) stars += '½';
    for (let i = fullStars + (hasHalf ? 1 : 0); i < 5; i++) stars += '☆';
    
    return stars;
};

const saveCart = () => {
    localStorage.setItem('plushieCart', JSON.stringify(state.cart));
};

// ==============================
// RIPPLE EFFECT
// ==============================
const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.classList.add('ripple');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
};

// ==============================
// TOAST NOTIFICATIONS
// ==============================
const showToast = (title, message, icon = '✨') => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    elements.toastContainer.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
};

// ==============================
// PRODUCTS
// ==============================
const createProductCard = (product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.category = product.category;
    card.dataset.id = product.id;
    
    card.innerHTML = `
        <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-actions">
                <button class="product-action-btn quick-view-btn" aria-label="Быстрый просмотр" data-id="${product.id}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </button>
                <button class="product-action-btn wishlist-btn" aria-label="В избранное">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="product-info">
            <span class="product-category">${product.categoryName}</span>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <span class="stars">${generateStars(product.rating)}</span>
                <span>(${product.reviews})</span>
            </div>
            <div class="product-footer">
                <span class="product-price">${formatPrice(product.price)}</span>
                <button class="product-add add-to-cart-btn" data-id="${product.id}">В корзину</button>
            </div>
        </div>
    `;
    
    // Ripple effect on buttons
    card.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', createRipple);
    });
    
    // Quick view
    card.querySelector('.quick-view-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openProductModal(product.id);
    });
    
    // Add to cart
    card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product.id);
    });
    
    // Wishlist
    card.querySelector('.wishlist-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        const btn = e.currentTarget;
        btn.style.color = btn.style.color === 'rgb(255, 90, 90)' ? '' : '#ff5a5a';
        btn.querySelector('svg').style.fill = btn.style.color ? 'currentColor' : 'none';
        showToast('Избранное', `${product.name} добавлен в избранное`, '💖');
    });
    
    // Open modal on card click
    card.addEventListener('click', () => openProductModal(product.id));
    
    return card;
};

const renderProducts = () => {
    elements.productsGrid.innerHTML = '';
    const filtered = state.currentFilter === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === state.currentFilter);
    
    filtered.forEach((product, index) => {
        const card = createProductCard(product);
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        elements.productsGrid.appendChild(card);
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 80);
    });
};

const initFilters = () => {
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentFilter = btn.dataset.filter;
            renderProducts();
        });
    });
};

// ==============================
// PRODUCT MODAL
// ==============================
const openProductModal = (productId) => {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    elements.productModalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-modal-image">
        <div class="product-modal-info">
            <span class="product-modal-category">${product.categoryName}</span>
            <h2 class="product-modal-name">${product.name}</h2>
            <div class="product-modal-rating">
                <span class="stars">${generateStars(product.rating)}</span>
                <span>${product.rating} (${product.reviews} отзывов)</span>
            </div>
            <p class="product-modal-desc">${product.description}</p>
            <div class="product-modal-features">
                ${product.features.map(f => `<div class="product-modal-feature">${f}</div>`).join('')}
            </div>
            <div class="product-modal-price">${formatPrice(product.price)}</div>
            <div class="product-modal-actions">
                <button class="btn btn-primary btn-full add-to-cart-modal" data-id="${product.id}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 6h15l-1.5 9h-12z"></path>
                        <circle cx="9" cy="20" r="1"></circle>
                        <circle cx="18" cy="20" r="1"></circle>
                        <path d="M6 6L5 3H2"></path>
                    </svg>
                    В корзину
                </button>
            </div>
        </div>
    `;
    
    elements.productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    elements.productModalBody.querySelector('.add-to-cart-modal').addEventListener('click', (e) => {
        createRipple(e);
        addToCart(product.id);
    });
};

const closeProductModal = () => {
    elements.productModal.classList.remove('active');
    document.body.style.overflow = '';
};

// ==============================
// CART
// ==============================
const addToCart = (productId) => {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = state.cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    showToast('Добавлено в корзину', `${product.name} — ${formatPrice(product.price)}`, '🛒');
    
    // Animate cart icon
    elements.cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        elements.cartBtn.style.transform = '';
    }, 200);
};

const removeFromCart = (productId) => {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
};

const updateQuantity = (productId, change) => {
    const item = state.cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
};

const updateCartUI = () => {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update count badge
    elements.cartCount.textContent = totalItems;
    elements.cartCount.classList.toggle('visible', totalItems > 0);
    
    // Show/hide empty state and footer
    if (state.cart.length === 0) {
        elements.cartEmpty.style.display = 'flex';
        elements.cartItems.style.display = 'none';
        elements.cartFooter.style.display = 'none';
    } else {
        elements.cartEmpty.style.display = 'none';
        elements.cartItems.style.display = 'flex';
        elements.cartFooter.style.display = 'block';
        
        // Render cart items
        elements.cartItems.innerHTML = state.cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-actions">
                        <div class="cart-item-qty">
                            <button class="qty-btn qty-minus" data-id="${item.id}">−</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
                        </div>
                        <button class="cart-item-remove" data-id="${item.id}">Удалить</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add event listeners
        elements.cartItems.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), -1));
        });
        
        elements.cartItems.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), 1));
        });
        
        elements.cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
        });
    }
    
    elements.cartTotal.textContent = formatPrice(totalPrice);
};

const toggleCart = (open) => {
    state.isCartOpen = open;
    elements.cartSidebar.classList.toggle('active', open);
    elements.cartOverlay.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
};

// ==============================
// REVIEWS SLIDER
// ==============================
const renderReviews = () => {
    elements.reviewsTrack.innerHTML = reviewsData.map(review => `
        <div class="review-card">
            <div class="review-stars">${'★'.repeat(review.rating)}</div>
            <p class="review-text">${review.text}</p>
            <div class="review-author">
                <div class="review-avatar">${review.avatar}</div>
                <div>
                    <div class="review-name">${review.name}</div>
                    <div class="review-date">${review.date}</div>
                </div>
            </div>
        </div>
    `).join('');
    updateReviewsPosition();
};

const updateReviewsPosition = () => {
    const cardWidth = elements.reviewsTrack.querySelector('.review-card')?.offsetWidth || 0;
    const gap = 24;
    elements.reviewsTrack.style.transform = `translateX(-${state.reviewsIndex * (cardWidth + gap)}px)`;
    
    const maxIndex = Math.max(0, reviewsData.length - getVisibleReviewsCount());
    elements.reviewsPrev.disabled = state.reviewsIndex === 0;
    elements.reviewsNext.disabled = state.reviewsIndex >= maxIndex;
};

const getVisibleReviewsCount = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1200) return 2;
    return 3;
};

const initReviewsSlider = () => {
    renderReviews();
    
    elements.reviewsPrev.addEventListener('click', () => {
        if (state.reviewsIndex > 0) {
            state.reviewsIndex--;
            updateReviewsPosition();
        }
    });
    
    elements.reviewsNext.addEventListener('click', () => {
        const maxIndex = Math.max(0, reviewsData.length - getVisibleReviewsCount());
        if (state.reviewsIndex < maxIndex) {
            state.reviewsIndex++;
            updateReviewsPosition();
        }
    });
    
    window.addEventListener('resize', () => {
        state.reviewsIndex = Math.min(state.reviewsIndex, Math.max(0, reviewsData.length - getVisibleReviewsCount()));
        updateReviewsPosition();
    });
};

// ==============================
// SCROLL ANIMATIONS
// ==============================
const initScrollAnimations = () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
};

// ==============================
// HEADER SCROLL
// ==============================
const initHeaderScroll = () => {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            elements.header.classList.add('scrolled');
        } else {
            elements.header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
};

// ==============================
// MOBILE MENU
// ==============================
const toggleMenu = (open) => {
    state.isMenuOpen = open;
    elements.menuToggle.classList.toggle('active', open);
    elements.mobileMenu.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
};

const initMobileMenu = () => {
    elements.menuToggle.addEventListener('click', () => {
        toggleMenu(!state.isMenuOpen);
    });
    
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });
};

// ==============================
// SMOOTH SCROLL & ACTIVE NAV
// ==============================
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

const initActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => observer.observe(section));
};

// ==============================
// CURSOR GLOW
// ==============================
const initCursorGlow = () => {
    if (!elements.cursorGlow) return;
    
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let rafId = null;
    let isActive = false;
    
    const animate = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        elements.cursorGlow.style.left = `${currentX}px`;
        elements.cursorGlow.style.top = `${currentY}px`;
        
        if (isActive) {
            rafId = requestAnimationFrame(animate);
        }
    };
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isActive) {
            isActive = true;
            animate();
        }
    });
    
    document.addEventListener('mouseleave', () => {
        isActive = false;
        if (rafId) cancelAnimationFrame(rafId);
    });
};

// ==============================
// HERO IMAGE PARALLAX
// ==============================
const initHeroParallax = () => {
    if (!elements.heroImage) return;
    
    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX / innerWidth - 0.5) * 15;
        const y = (clientY / innerHeight - 0.5) * 15;
        
        elements.heroImage.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
};

// ==============================
// CONTACT FORM
// ==============================
const initContactForm = () => {
    if (!elements.contactForm) return;
    
    elements.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(elements.contactForm);
        const name = elements.contactForm.querySelector('#name').value;
        
        // Simulate form submission
        const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            elements.contactForm.reset();
            showToast('Сообщение отправлено', `Спасибо, ${name}! Мы скоро свяжемся с вами.`, '✉️');
        }, 1500);
    });
};

// ==============================
// CLICK PARTICLES
// ==============================
const initClickParticles = () => {
    const colors = ['#c8a4f0', '#f0a4c8', '#a4c8f0', '#ffffff'];
    
    document.addEventListener('click', (e) => {
        // Don't create particles on buttons (they have ripple)
        if (e.target.closest('button, a')) return;
        
        const particleCount = 8;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                width: 6px;
                height: 6px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
            `;
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 50 + Math.random() * 50;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }).onfinish = () => particle.remove();
        }
    });
};

// ==============================
// LOAD MORE
// ==============================
const initLoadMore = () => {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', (e) => {
        createRipple(e);
        showToast('Скоро!', 'Новые коллекции уже на подходе 🎉', '✨');
    });
};

// ==============================
// CHECKOUT
// ==============================
const initCheckout = () => {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (!checkoutBtn) return;
    
    checkoutBtn.addEventListener('click', (e) => {
        createRipple(e);
        if (state.cart.length === 0) {
            showToast('Корзина пуста', 'Добавьте товары перед оформлением заказа', '🛒');
        } else {
            showToast('Заказ оформляется', 'Переходим к оплате...', '💳');
        }
    });
};

// ==============================
// BACK TO TOP
// ==============================
const initBackToTop = () => {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    const toggleVisibility = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        backToTop.classList.toggle('visible', scrollY > 500);
    };
    
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    backToTop.addEventListener('click', (e) => {
        createRipple(e);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// ==============================
// INITIALIZATION
// ==============================
const init = () => {
    renderProducts();
    initFilters();
    renderReviews();
    initReviewsSlider();
    updateCartUI();
    initScrollAnimations();
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initCursorGlow();
    initHeroParallax();
    initContactForm();
    initClickParticles();
    initLoadMore();
    initCheckout();
    initBackToTop();
    
    // Cart events
    elements.cartBtn.addEventListener('click', () => toggleCart(true));
    elements.cartClose.addEventListener('click', () => toggleCart(false));
    elements.cartOverlay.addEventListener('click', () => toggleCart(false));
    
    // Modal events
    elements.productModalOverlay.addEventListener('click', closeProductModal);
    elements.productModalClose.addEventListener('click', closeProductModal);
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleCart(false);
            closeProductModal();
            toggleMenu(false);
        }
    });
};

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

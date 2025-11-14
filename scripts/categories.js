// Categories page functionality
document.addEventListener('DOMContentLoaded', function() {
    const categories = [
        // Technology
        { name: "Software Analysis", desc: "System analysis and software development processes", category: "technology", icon: "🔍" },
        { name: "Data Analysis", desc: "Data processing and analytical techniques", category: "technology", icon: "📊" },
        { name: "Web Development", desc: "Frontend and backend web technologies", category: "technology", icon: "🌐" },
        { name: "Mobile Development", desc: "iOS and Android app development", category: "technology", icon: "📱" },
        { name: "Cloud Computing", desc: "Cloud services and infrastructure management", category: "technology", icon: "☁️" },
        { name: "Cybersecurity", desc: "Security protocols and threat protection", category: "technology", icon: "🛡️" },
        { name: "AI & Machine Learning", desc: "Artificial intelligence and ML algorithms", category: "technology", icon: "🤖" },
        { name: "Database Management", desc: "Database design and administration", category: "technology", icon: "🗃️" },
        { name: "DevOps", desc: "Development and operations integration", category: "technology", icon: "⚙️" },
        { name: "Blockchain", desc: "Distributed ledger technology", category: "technology", icon: "⛓️" },
        
        // Business
        { name: "Stock Management", desc: "Inventory and stock control systems", category: "business", icon: "📦" },
        { name: "Business Strategy", desc: "Strategic planning and execution", category: "business", icon: "🎯" },
        { name: "Project Management", desc: "Project planning and team coordination", category: "business", icon: "📋" },
        { name: "Financial Analysis", desc: "Financial data interpretation and reporting", category: "business", icon: "💰" },
        { name: "Supply Chain", desc: "Logistics and supply management", category: "business", icon: "🚚" },
        { name: "Entrepreneurship", desc: "Startup development and innovation", category: "business", icon: "💡" },
        { name: "Human Resources", desc: "HR management and talent acquisition", category: "business", icon: "👥" },
        { name: "Operations", desc: "Business operations optimization", category: "business", icon: "⚙️" },
        { name: "Leadership", desc: "Team leadership and management", category: "business", icon: "🌟" },
        { name: "Consulting", desc: "Business advisory services", category: "business", icon: "💼" },
        
        // Marketing
        { name: "Digital Marketing", desc: "Online marketing strategies and campaigns", category: "marketing", icon: "📱" },
        { name: "Search Engine Optimization", desc: "SEO techniques and best practices", category: "marketing", icon: "🔍" },
        { name: "Social Media Handling", desc: "Social media management and engagement", category: "marketing", icon: "👍" },
        { name: "Content Marketing", desc: "Content creation and strategy development", category: "marketing", icon: "📝" },
        { name: "Email Marketing", desc: "Email campaign management and automation", category: "marketing", icon: "✉️" },
        { name: "Brand Management", desc: "Brand development and positioning", category: "marketing", icon: "🏷️" },
        { name: "Market Research", desc: "Consumer and market analysis", category: "marketing", icon: "📈" },
        { name: "Advertising", desc: "Ad campaigns and media buying", category: "marketing", icon: "📢" },
        { name: "Influencer Marketing", desc: "Influencer collaboration strategies", category: "marketing", icon: "⭐" },
        { name: "Analytics", desc: "Marketing data analysis", category: "marketing", icon: "📊" },
        
        // Design
        { name: "UI/UX Design", desc: "User interface and experience design", category: "design", icon: "🎨" },
        { name: "Graphic Design", desc: "Visual design and branding", category: "design", icon: "✏️" },
        { name: "Product Design", desc: "Product development and design", category: "design", icon: "📐" },
        { name: "Motion Graphics", desc: "Animation and visual effects", category: "design", icon: "🎬" },
        { name: "Web Design", desc: "Website layout and visual design", category: "design", icon: "🖥️" },
        { name: "3D Modeling", desc: "3D design and rendering", category: "design", icon: "🔶" },
        { name: "Illustration", desc: "Digital and traditional illustration", category: "design", icon: "🖌️" },
        { name: "Typography", desc: "Font and type design", category: "design", icon: "🔤" },
        
        // Research
        { name: "Academic Research", desc: "Scholarly research methodologies", category: "research", icon: "📚" },
        { name: "Market Research", desc: "Market analysis and trends", category: "research", icon: "🔬" },
        { name: "Data Research", desc: "Data collection and analysis", category: "research", icon: "📊" },
        { name: "Scientific Research", desc: "Scientific methods and studies", category: "research", icon: "🧪" },
        { name: "User Research", desc: "User behavior and feedback analysis", category: "research", icon: "👤" },
        { name: "Competitive Analysis", desc: "Competitor research and strategy", category: "research", icon: "⚔️" },
        
        // Commerce
        { name: "E-commerce", desc: "Online retail and sales management", category: "commerce", icon: "🛒" },
        { name: "Retail Management", desc: "Store operations and management", category: "commerce", icon: "🏪" },
        { name: "Sales", desc: "Sales techniques and strategies", category: "commerce", icon: "📞" },
        { name: "Customer Service", desc: "Client support and relations", category: "commerce", icon: "💬" },
        { name: "Merchandising", desc: "Product display and promotion", category: "commerce", icon: "🛍️" },
        { name: "Digital Commerce", desc: "Online business strategies", category: "commerce", icon: "💳" }
    ];

    const categoriesGrid = document.getElementById('categoriesGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const totalCategories = document.getElementById('totalCategories');

    function displayCategories(filteredCategories = categories) {
        categoriesGrid.innerHTML = '';
        filteredCategories.forEach((cat, index) => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.setAttribute('data-category', cat.category);
            categoryCard.style.animationDelay = `${(index % 10) * 0.1}s`;
            categoryCard.innerHTML = `
                <div class="category-icon">${cat.icon}</div>
                <div class="category-name">${cat.name}</div>
                <div class="category-desc">${cat.desc}</div>
                <div class="category-tag">${cat.category}</div>
            `;
            categoriesGrid.appendChild(categoryCard);
        });
        
        totalCategories.textContent = `${filteredCategories.length}+`;
    }

    function filterCategories() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        
        const filtered = categories.filter(cat => {
            const matchesSearch = cat.name.toLowerCase().includes(searchTerm) || 
                                cat.desc.toLowerCase().includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || cat.category === activeFilter;
            return matchesSearch && matchesFilter;
        });
        
        displayCategories(filtered);
    }

    // Event listeners
    searchInput.addEventListener('input', filterCategories);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterCategories();
        });
    });

    // Initial display
    displayCategories();
});

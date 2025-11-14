// Company registration page functionality
document.addEventListener('DOMContentLoaded', function() {
    const categories = [
        "Software Analysis", "Digital Marketing", "Stock Management", "Search Engine Optimization",
        "Data Analysis", "Blogging", "Social Media Handling", "Web Development", "Mobile Development",
        "Cloud Computing", "Cybersecurity", "AI & Machine Learning", "Database Management",
        "Business Strategy", "Project Management", "Financial Analysis", "Supply Chain",
        "Entrepreneurship", "Human Resources", "Operations", "Content Marketing", "Email Marketing",
        "Brand Management", "Market Research", "Advertising", "UI/UX Design", "Graphic Design",
        "Product Design", "Motion Graphics", "Web Design", "3D Modeling", "Illustration",
        "Academic Research", "Data Research", "Scientific Research", "User Research",
        "E-commerce", "Retail Management", "Sales", "Customer Service", "Merchandising"
    ];

    const categoriesList = document.getElementById('categoriesList');
    const categorySearch = document.getElementById('categorySearch');
    const companyForm = document.getElementById('companyForm');
    const successMessage = document.getElementById('successMessage');

    // Populate categories list
    function displayCategories(categoriesToShow = categories) {
        categoriesList.innerHTML = '';
        categoriesToShow.forEach(category => {
            const categoryOption = document.createElement('div');
            categoryOption.className = 'category-option';
            categoryOption.innerHTML = `
                <input type="checkbox" id="cat-${category.replace(/\s+/g, '-').toLowerCase()}" value="${category}">
                <label for="cat-${category.replace(/\s+/g, '-').toLowerCase()}">${category}</label>
            `;
            categoriesList.appendChild(categoryOption);
            
            // Add selection functionality
            const checkbox = categoryOption.querySelector('input');
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    categoryOption.classList.add('selected');
                } else {
                    categoryOption.classList.remove('selected');
                }
            });
        });
    }

    // Search functionality
    categorySearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredCategories = categories.filter(category => 
            category.toLowerCase().includes(searchTerm)
        );
        displayCategories(filteredCategories);
    });

    // Form submission
    companyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get selected categories
        const selectedCategories = [];
        document.querySelectorAll('.category-option input:checked').forEach(checkbox => {
            selectedCategories.push(checkbox.value);
        });
        
        // Basic validation
        if (selectedCategories.length === 0) {
            alert('Please select at least one category for internships');
            return;
        }
        
        // Show success message
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth' });
        
        // In a real application, you would send this data to a server
        // Reset form after 3 seconds (optional)
        setTimeout(() => {
            companyForm.reset();
            displayCategories();
            successMessage.style.display = 'none';
        }, 5000);
    });

    // Initialize
    displayCategories();
});

document.addEventListener('DOMContentLoaded', function () {
                        const searchInput = document.querySelector('.search-input');
                        const ruleDropdowns = document.querySelectorAll('.rule-dropdown');

                        searchInput.addEventListener('input', function () {
                            const query = this.value.trim().toLowerCase();

                            ruleDropdowns.forEach(dropdown => {
                                const header = dropdown.querySelector('.rule-dropdown-header');
                                const content = dropdown.querySelector('.rule-dropdown-content');
                                const text = (header.textContent + ' ' + content.textContent).toLowerCase();

                                // Remove previous highlights
                                header.innerHTML = header.textContent;
                                content.innerHTML = content.textContent;

                                if (query === '') {
                                    dropdown.style.display = '';
                                } else if (text.includes(query)) {
                                    dropdown.style.display = '';
                                    // Highlight matches in header and content
                                    highlightText(header, query);
                                    highlightText(content, query);
                                } else {
                                    dropdown.style.display = 'none';
                                }
                            });
                        });

                        function highlightText(element, query) {
                            if (!query) return;
                            const text = element.textContent;
                            const regex = new RegExp(`(${query})`, 'gi');
                            element.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
                        }
                    });

                    const rules = [
                        {
                            id: "rule-1",
                            title: "1.1. You must be at least 13 years old to be on Discord",
                            content: "You must meet the minimum age requirement for Discord within your country. Claiming to be younger, even as a joke, will result in a ban."
                        },
                        // Add more rules here:
                        // {
                        //     id: "rule-2",
                        //     title: "2. No NSFW Content / Gore / Explicit Behavior",
                        //     content: "We have a zero tolerance policy for any jokes, comments, or any other form of media that sexualizes a minor. ..."
                        // }
                    ];

                    function renderRules() {
                        const rulesList = document.getElementById('rules-list');
                        rulesList.innerHTML = '';
                        rules.forEach(rule => {
                            const ruleDiv = document.createElement('div');
                            ruleDiv.className = 'rule-dropdown';
                            ruleDiv.id = rule.id;
                            ruleDiv.innerHTML = `
                                <div class="rule-dropdown-header" onclick="toggleDropdown('${rule.id}')">
                                    <span class="rule-dropdown-arrow">&#9660;</span>
                                    ${rule.title}
                                </div>
                                <div class="rule-dropdown-content" style="display: none;">
                                    ${rule.content}
                                </div>
                            `;
                            rulesList.appendChild(ruleDiv);
                        });
                    }

                    // Dropdown toggle function (if not already present)
                    function toggleDropdown(id) {
                        const dropdown = document.getElementById(id);
                        const content = dropdown.querySelector('.rule-dropdown-content');
                        const arrow = dropdown.querySelector('.rule-dropdown-arrow');
                        const isOpen = dropdown.classList.contains('open');
                        if (isOpen) {
                            content.style.display = 'none';
                            dropdown.classList.remove('open');
                        } else {
                            content.style.display = 'block';
                            dropdown.classList.add('open');
                        }
                    }

                    document.addEventListener('DOMContentLoaded', renderRules);
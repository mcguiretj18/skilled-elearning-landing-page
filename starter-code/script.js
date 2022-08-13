const mainElement = document.querySelector('section[role="main"]');
const cards = [
    {
        icon: 'assets/icon-animation.svg',
        title: 'Animation',
        desc: `Learn the latest animation techniques to create stunning motion 
  design and captivate your audience.`
    },
    {
        icon: 'assets/icon-design.svg',
        title: 'Design',
        desc: `Create beautiful, usable interfaces to help shape the future of 
        how the web looks.`
    },
    {
        icon: 'assets/icon-photography.svg',
        title: 'Photography',
        desc: `Explore critical fundamentals like lighting, composition, and focus 
        to capture exceptional photos.`
    },
    {
        icon: 'assets/icon-crypto.svg',
        title: 'Crypto',
        desc: `All you need to know to get started investing in crypto. Go from beginner 
        to advanced with this 54 hour course.`
    },
    {
        icon: 'assets/icon-business.svg',
        title: 'Business',
        desc: `A step-by-step playbook to help you start, scale, and sustain your business 
        without outside investment.`
    }
];

function generateAndAppend(tagName, parentElement, options) {
    let element = null;
    switch(tagName) {            
        case 'img':
            element = document.createElement(tagName);
            element.src = options.src;
            element.alt = options.alt;
            break;
        case 'h2':
            element = document.createElement(tagName);
            element.textContent = options.title;
            break;
        case 'p':
            element = document.createElement(tagName);
            element.textContent = options.desc;
            break;
        case 'button':
            element = document.createElement(tagName);
            element.textContent = options.text;
            break;
        default:
            throw new Error(`Unsupported tag name ${tagName}`);
    }
    parentElement.appendChild(element);
}

cards.forEach(({ icon, title, desc }) => {
    const card = document.createElement('div');
    card.classList.add('dynamic-card');

    generateAndAppend('img', card, {
        src: icon,
        alt: `${title} Icon`
    })

    generateAndAppend('h2', card, {
        title
    })

    generateAndAppend('p', card, {
        desc
    });

    generateAndAppend('button', card, {
        text: 'Get Started'
    });

    mainElement.appendChild(card);
})

// Each one has a get started button
// Get Started
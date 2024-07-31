export default function decorate(block) {
    const linklist = document.createElement('ul');
    linklist.className = 'link-list';

    const links = [...block.querySelectorAll('a')];
    block.classList.add(`link-list-${links.length}-links`);
    
    links.forEach((link) => {
        const linkWrapper = link.closest('div');
        if (linkWrapper && linkWrapper.children.length === 1) {
        // link is only content in column
        linkWrapper.classList.add('link-list-link-col');
        }
    });
};
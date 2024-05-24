document.addEventListener('DOMContentLoaded', () => {
    const containerProperties = document.getElementById('container-properties');
    const childProperties = document.getElementById('child-properties');
    const designContainer = document.getElementById('design-container');
    const designChildren = document.querySelectorAll('.design-child');

    containerProperties.addEventListener('change', (event) => {
        const selectedProperty = event.target.value;
        designContainer.style.cssText = selectedProperty;
    });

    childProperties.addEventListener('change', (event) => {
        const selectedProperty = event.target.value;
        designChildren.forEach(child => {
            child.style.cssText = selectedProperty;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const resizeHandleLeft = document.getElementById('resize-handle-left');
    const resizeHandleRight = document.getElementById('resize-handle-right');
    const resizableContainer = document.getElementById('design-container');

    let isResizingLeft = false;
    let isResizingRight = false;
    let prevX = 0;

    // Event listener for left resize handle mousedown event
    resizeHandleLeft.addEventListener('mousedown', (e) => {
        isResizingLeft = true;
        prevX = e.clientX;
    });

    // Event listener for right resize handle mousedown event
    resizeHandleRight.addEventListener('mousedown', (e) => {
        isResizingRight = true;
        prevX = e.clientX;
    });

    // Event listener for mouseup event anywhere in the document
    document.addEventListener('mouseup', () => {
        isResizingLeft = false;
        isResizingRight = false;
    });

    // Event listener for mousemove event
    document.addEventListener('mousemove', (e) => {
        if (isResizingLeft) {
            const widthDiff = prevX - e.clientX;
            resizableContainer.style.width = `${resizableContainer.offsetWidth + widthDiff}px`;
            prevX = e.clientX;
        } else if (isResizingRight) {
            const widthDiff = e.clientX - prevX;
            resizableContainer.style.width = `${resizableContainer.offsetWidth + widthDiff}px`;
            prevX = e.clientX;
        }
    });
});


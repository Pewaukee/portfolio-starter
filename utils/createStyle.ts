// dynamically create the styles for the corner images (icons)
export default function createStyle(top: boolean, left: boolean): string {
    // based on activation to move a certain percentage on the container
    if (top && left) return `absolute top-[80%] left-[80%]`;
    else if (top && !left) return `absolute top-[80%] left-[-10%]`;
    else if (!top && left) return `absolute top-[-10%] left-[80%]`;
    else return `absolute top-[-10%] left-[-10%]`;
  }
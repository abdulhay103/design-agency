export async function generateMetadata() {
    return {
        title: "Projects",
    };
}

export default function ProjectLayout({ children }) {
    return <div>{children}</div>;
}

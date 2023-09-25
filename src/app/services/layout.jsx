export async function generateMetadata() {
    return {
        title: "Services",
    };
}

export default function ServiceLayout({ children }) {
    return <div>{children}</div>;
}

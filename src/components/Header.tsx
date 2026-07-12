import StaggeredMenu from "./StaggeredMenu";

const Header = () => {
    const menuItems = [
        { label: "Home", link: "#" },
        { label: "About Me", link: "#about" },
        { label: "Journey", link: "#journey" },
        { label: "Projects", link: "#projects" },
        { label: "AI Studio", link: "#ai-showcase" },
        { label: "Skills", link: "#skills" },
        { label: "Achievements", link: "#achievements" },
        { label: "Contact", link: "#contact" }
    ];

    const socialItems = [
        { label: "GitHub", link: "https://github.com/ZohaAnsari04" },
        { label: "LinkedIn", link: "https://www.linkedin.com/in/er-ansari-zoha-najmul-kalam-819610238/" },
        { label: "Email", link: "mailto:ansarizoha04@gmail.com" }
    ];

    return (
        <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            logoText="BuiltByZoha"
            colors={["#070708", "#881337", "#ef4444"]}
        />
    );
};

export default Header;

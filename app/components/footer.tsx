export default function Footer() {
    return (
        <footer className="footer">
          <p style={{ margin: 0, color: "#6b7280", fontSize: 13, textAlign: "center" }}>
            © {new Date().getFullYear()} AU Addmissions • Built with Next.js • by Matei Mihalache
          </p>
        </footer>
    )
}
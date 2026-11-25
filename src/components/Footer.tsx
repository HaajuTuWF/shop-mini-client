export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} HaajuShop · Bài tập môn Công nghệ lập trình hiện đại buổi 1</p>
        <p>Hotline: 1900 0000 · Email: hotro@haajushop.vn</p>
      </div>
    </footer>
  );
}

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} Satsang Europe. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;

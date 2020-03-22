const Footer = () => {
  return (
    <div className="flex flex-row bg-gray-300 justify-between bottom-0">
      <div className="p-2">
        Source Data: NovelCOVID
        <a className="ml-2" href="https://github.com/NovelCOVID/API">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="p-2">Made by Rubén
      <a className="ml-2" href="https://github.com/ru03/covid19-nextjs-page">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;

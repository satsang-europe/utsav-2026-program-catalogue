const ProgramMenu = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Programs:</h2>
      {/* Prayer Menu */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold">Prayer</h3>
        <ol className="space-y-2  list-inside pl-5 mt-2">
          <li>
            <a href="#m-pr-eng">Morning Prayer - English</a>
          </li>
          <li>
            <a href="#m-pr-hindi">Morning Prayer - Hindi</a>
          </li>
          <li>
            <a href="#me-pr-eng">Morning-Evening Prayer - English</a>
          </li>
          <li>
            <a href="#me-pr-hindi">Morning-Evening Prayer - Hindi</a>
          </li>
          <li>
            <a href="#ev-pr-eng">Evening Prayer - English</a>
          </li>
          <li>
            <a href="#ev-pr-hindi">Evening Prayer - Hindi</a>
          </li>
          <li>
            <a href="#gv-eng">Sadguru Vandana - English</a>
          </li>
          <li>
            <a href="#gv-hindi">Sadguru Vandana- Hindi</a>
          </li>
          <li>
            <a href="#jrk-eng">Joy Radhe Kirtan - English</a>
          </li>
          <li>
            <a href="#jrk-hindi">Joy Radhe Kirtan - Hindi</a>
          </li>
        </ol>
      </div>
      {/* Satsang Menu */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Satsang</h3>
        <ol className="space-y-2 list-inside pl-5 mt-2">
          <li>
            <a href="#st-pwn">Pawan ye ghari ayi</a>
          </li>
          <li>
            <a href="#st-hmb">He Momo Bidhatah Bishwatratah</a>
          </li>
          <li>
            <a href="#st-jmps">Jo mere pritam se preet kare</a>
          </li>
          <li>
            <a href="#st-omr">ओ मनवा रे</a>
          </li>
          <li>
            <a href="#st-fsnkrtn">Fusion Kirtan</a>
          </li>
        </ol>
      </div>
      {/* Concert Menu */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Concert</h3>
        <ol className="space-y-2 list-inside pl-5 mt-2">
          <li>
            <a href="#cn-mkchbkp">Maa k chada Banche k prane</a>
          </li>
          <li>
            <a href="#">Nath</a>
          </li>
          <li>
            <a href="#cn-noit">No one&apos;s There</a>
          </li>
          <li>
            <a href="#">Jay Radhe Radhe Kirtan Gawe</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ProgramMenu;

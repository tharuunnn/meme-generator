const Input: React.FC = () => {
  return(
  <div className="meme-input-container">
    <div className="ip-container">
      <div className="top-ip-container">
        <div>
          <label className="toptext">Top text</label>
        </div>
        <div>
          <input type="text" placeholder="Shut up"  className="top-input"/>
        </div>
      </div>
      <div className="bottom-ip-container">
        <div>
          <label className="bottomtext">Bottom text</label>
        </div>
        <div>
          <input type="text" placeholder="and take my money" className="bottom-input"/>
        </div>
     </div>
    </div>
    <div className="new-meme-button-container">
      <button className="new-meme-button">
        Get a new meme image 🖼
      </button>
    </div>
  </div>
  )
}

export default Input;
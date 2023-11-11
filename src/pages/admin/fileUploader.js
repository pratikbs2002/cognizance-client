const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
};

const thumb = {
    display: "inline-flex",
    borderRadius: "7px",
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: "150px",
    height: "170px",
    padding: 2,
    boxSizing: "border-box",
};

const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
};

const img = {
    display: "block",
    width: "auto",
    height: "100%",
};

module.exports = {
    thumbsContainer,
    thumb,
    thumbInner,
    img,
};

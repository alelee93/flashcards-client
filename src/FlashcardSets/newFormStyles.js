const newFormStyles = (theme) => ({
  newForm: {
    width: "500px",
    height: "300px",
    margin: "50px",
    float: "right",
    top: "-40px"
  },
  textSection: {
    //maxWidth: '85%'
    width: "85%"
  },
  deleteIcon: {
    position: "absolute",
    right: "5px",
    top: "calc(50% - 15px)",
    "&:hover": {
      color: "red"
    }
  }
});

export default newFormStyles;

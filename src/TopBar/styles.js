const styles = theme => ({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: "100%"
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: "100%"
    }
  });  

  export default styles

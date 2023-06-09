module App.Components.Button where

type ButtonProps =
  { name :: String
  }

button :: ButtonProps -> String
button props = props.name

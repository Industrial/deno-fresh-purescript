module App.Islands.Counter where

type CounterProps =
  { name :: String
  }

counter :: CounterProps -> String
counter props = props.name

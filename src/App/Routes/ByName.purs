module App.Routes.ByName where

import Prelude

type ByNameRouteProps =
  { name :: String
  }

byNameRoute :: ByNameRouteProps -> String
byNameRoute props = "NAME: " <> props.name

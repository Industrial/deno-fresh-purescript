module App.Routes.Index where

import Prelude

import App.Islands.Counter (counterComponent)
import React.Basic.Hooks (Component, component)

indexRoute :: Component Unit
indexRoute = do
  renderCounter <- counterComponent
  component "IndexRoute" \_ -> Hooks.do
    pure $ renderCounter 0

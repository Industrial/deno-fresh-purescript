module App.Islands.Counter where

import Prelude

import React.Basic.DOM as R
import React.Basic.Events (handler_)
import React.Basic.Hooks (Component, component, useState, (/\))
import React.Basic.Hooks as Hooks

type CounterProps = {}

counterComponent :: Component Int
counterComponent = do
  component "Counter" \initialValue -> Hooks.do
    counter /\ setCounter <- useState initialValue

    pure
      $ R.button

          { onClick: handler_ do
              setCounter (_ + 1)
          , children: [ R.text $ "Increment: " <> show counter ]
          }

import * as React from "react";
import { createRoot } from 'react-dom/client'

import {Hero} from "../components/hero";

const root = createRoot(document.getElementById('app'))
root.render(React.createElement(Hero))

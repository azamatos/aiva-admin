import {useContext} from 'react'
import {ConfigContext} from 'contexts'

// ==============================|| CONFIG - HOOKS  ||============================== //

export const useConfig = () => useContext(ConfigContext)

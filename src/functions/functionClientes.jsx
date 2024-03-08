import React from 'react'
import peinadosApi from '../api/peinadosApi'
export function getClientes (){
    peinadosApi.get("clientes")
}
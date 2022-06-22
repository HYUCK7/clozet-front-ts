import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppState, AppDispatch } from '@/modules/store'
import React,{useEffect} from 'react';


export const useAppDispatch : () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useScript = (url: any, onload: any) => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.onload = onload;
  
      document.head.appendChild(script);
  
      return () => {
        document.head.removeChild(script);
      };
    }, [url, onload]);
  };

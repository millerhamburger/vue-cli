const { MODE, VITE_API_HOST } = import.meta.env

const isDubug: boolean = MODE === 'debug';

if(!isDubug){
  (window as any).config = {
    apiHost: VITE_API_HOST
  }
} else {
  const url: string = window.location.protocol + '//' + window.location.host;
  (window as any).config = {
    apiHost: url
  }
}


import './index.css';

export function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
export function CardImage({ src }) {
    return (  
        <img className="card-image" src={src} />  
    );
}
export function CardTitle({ children }) {
    return (  
        <h3 className="card-title">{children}</h3>  
    );
}
export function CardDate({ children }) {
    return (
        <p className="card-date">{children}</p>
    );
}
export function CardRating({ children }) {
    return (
        <p className="card-rating">{children}</p>
    );
}

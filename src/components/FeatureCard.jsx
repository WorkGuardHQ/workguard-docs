// //src/components/FeatureCard.jsx
// export default function FeatureCard({
//   title,
//   description,
// }) {
//   return (
//     <div className="card h-100 shadow-sm border-0">
//       <div className="card-body">
//         <h5 className="fw-bold mb-3">
//           {title}
//         </h5>

//         <p className="text-muted mb-0">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

// src/components/FeatureCard.jsx
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="wg-feature-card">
      {icon && <div className="wg-feature-card__icon">{icon}</div>}
      <h3 className="wg-feature-card__title">{title}</h3>
      <p className="wg-feature-card__desc">{description}</p>
    </div>
  )
}
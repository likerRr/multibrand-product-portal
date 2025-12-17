import React from 'react';

interface Props {
  title: string;
  description: string;
  emoji: string;
}

export const FeatureItem: React.FC<Props> = ({ title, description, emoji }) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
      <div className="text-2xl mb-3">{emoji}</div>
      <h3 className="font-bold text-card-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

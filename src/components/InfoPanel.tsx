import React from 'react';

interface InfoPanelProps {
  // Definujte vlastnosti, které bude komponenta přijímat
  title?: string;
  content?: string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ title = "Informace", content = "Zde budou informace o mapě." }) => {
  return (
    <div className="info-panel">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default InfoPanel;
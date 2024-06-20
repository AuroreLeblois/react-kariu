// src/stories/Changelog.tsx
import React from 'react';

interface ChangelogProps {
  // Ajoutez ici les props nécessaires
}

const Changelog: React.FC<ChangelogProps> = () => {
  return (
    <div>
      <h1>Changelogs</h1>
      <ul>
        <li><strong>v0.0.1</strong> - Initial release.</li>
        <li><strong>v0.1.0</strong> - First functional release.</li>
        <li><strong>v0.1.1</strong> - Add component Input in beta version.</li>
        <li><strong>v0.1.2</strong> - Add Changelogs ans Welcome pages to documentation (no build).</li>
      </ul>
    </div>
  );
};

export default Changelog;

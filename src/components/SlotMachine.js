import React, { useState } from 'react';
import './SlotMachine.css'; // For custom styling

// Define the possible items in the slot machine
const items = [
  { type: 'Weapon', rarity: 'Common' },
  { type: 'Weapon', rarity: 'Rare' },
  { type: 'Consumable', rarity: 'Uncommon' },
  { type: 'Material', rarity: 'Epic' },
  { type: 'Material', rarity: 'Legendary' },
];

const SlotMachine = () => {
  const [spinning, setSpinning] = useState(false); // Track if the machine is spinning
  const [reward, setReward] = useState({ type: '', rarity: '' });

  // Function to simulate spinning
  const spinReels = () => {
    setSpinning(true);

    // Simulate spinning with a delay of 3 seconds
    setTimeout(() => {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setReward(randomItem);
      setSpinning(false);
    }, 3000); // 3-second spinning duration
  };

  return (
    <div className="slot-machine-box">
      <h1>Slot Machine Game</h1>

      <div className="screens">
        <div className={`screen left-screen ${spinning ? 'spinning' : ''}`}>
          <span>{spinning ? '...' : reward.type}</span>
        </div>
        <div className={`screen right-screen ${spinning ? 'spinning' : ''}`}>
          <span>{spinning ? '...' : reward.rarity}</span>
        </div>
      </div>

      <button onClick={spinReels} disabled={spinning}>Spin</button>
    </div>
  );
};

export default SlotMachine;

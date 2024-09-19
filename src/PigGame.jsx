import React, { useState } from 'react';

const PigGame = () => {
  // สร้าง state สำหรับ level และขนาดของรูปภาพ
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100);

  // สร้าง state สำหรับการเปลี่ยนรูปภาพ
  const [pigImage, setPigImage] = useState('/images.jpg'); // เริ่มต้นด้วยรูปภาพหมู

  // ฟังก์ชันสำหรับเพิ่ม level และขนาดของรูปภาพ
  const feedPig = (points) => {
    const newLevel = level + points;
    setLevel(newLevel);

    // เพิ่มขนาดของรูปภาพตาม level
    setSize(size + points);

    // เมื่อ level เกิน 100 จะเปลี่ยนเป็นรูปภาพของตัวเอง
    if (newLevel >= 100) {
      setPigImage('/Screenshot 2024-09-13 143247.png'); // เปลี่ยนลิงก์นี้เป็นรูปภาพของคุณเอง
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>เกมเลี้ยงหมู</h1>
      <h2>Level: {level}</h2>
      <img src={pigImage} alt="Pig" style={{ width: size, height: size }} />
      <br />
      <button onClick={() => feedPig(5)}>ป้อนแตงโม (+5)</button>
      <button onClick={() => feedPig(10)}>ป้อนฟักทอง (+10)</button>
      <button onClick={() => feedPig(20)}>ป้อนหญ้า (+20)</button>
    </div>
  );
};

export default PigGame;

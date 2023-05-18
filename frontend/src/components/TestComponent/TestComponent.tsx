import React from 'react';
import styles from './TestComponent.module.css';

interface TestComponentProps {
  // Define the types for your props here, for example:
  text?: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ text = 'SAMPLE TEST COMPONENT TEXT' }) => {
  return (
    <div className={styles['test-component']}>
      <p>{text}</p>
    </div>
  );
};

export default TestComponent;

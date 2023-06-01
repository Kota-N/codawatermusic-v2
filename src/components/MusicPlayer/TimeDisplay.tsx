import React from 'react';

interface IProps {
    currentMinute: number;
    currentSecond: number;
    totalMinute: number;
    totalSecond: number;
}

const TimeDisplay = ({
    currentMinute,
    currentSecond,
    totalMinute,
    totalSecond,
}: IProps) => {
    return (
        <p className="time-display">
            {currentMinute}:
            {currentSecond <= 9 + 60 * currentMinute
                ? '0' + (currentSecond - 60 * currentMinute)
                : currentSecond - 60 * currentMinute}
            /{totalMinute}:{totalSecond <= 9 ? '0' + totalSecond : totalSecond}
        </p>
    );
};

export default TimeDisplay;

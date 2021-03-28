import dayjs from 'dayjs';
import { useState } from 'react';

const TimePicker = ({ onChange }) => {
    const [hour, setHour] = useState(1);
    const [minute, setMinute] = useState(0);
    const [ampm, setAmPM] = useState('am');

    
    const handleHourChange = (event) => {
        setHour(event.target.value);
        onChange(getSelectedTime(event.target.value, minute, ampm));
    }
    const handleMinuteChange = (event) => {
        setMinute(event.target.value);
        onChange(getSelectedTime(hour, event.target.value, ampm));
    }
    const handleAmPmChange = (event) => {
        setAmPM(event.target.value);
        onChange(getSelectedTime(hour, minute, event.target.value));
    }

    const getSelectedTime = (hour, minute, ampm) => {
        var selectedHour = ampm == 'am' ? hour : hour+12;
        return dayjs().hour(selectedHour).minute(minute);
    }

    return (<div >
        <div className="inline-flex text-lg border rounded-md shadow-lg p-2">
            <select value={hour} onChange={handleHourChange}
                className="px-2 outline-none appearance-none bg-transparent">
                {
                    Array.from({ length: 12 }, (x, i) => i + 1)
                        .map(value => <option key={value} value={value}>{value}</option>)

                }
            </select>
            <span className="px-2">:</span>
            <select value={minute}
                onChange={handleMinuteChange}
                className="px-2 outline-none appearance-none bg-transparent">
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="15">30</option>
                <option value="15">45</option>
            </select>
            <select value={ampm}
                onChange={handleAmPmChange}
                className="px-2 outline-none appearance-none bg-transparent">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
        </div>
    </div>)
}

export default TimePicker;
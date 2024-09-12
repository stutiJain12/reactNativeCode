import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    TextStyle, DeviceEventEmitter, NativeAppEventEmitter, Platform
} from 'react-native';
import {getEssentials} from '../../utils/utility';
import BackgroundTimer from 'react-native-background-timer';

import styles from './styles';

const EventEmitter = Platform.select({
    ios: () => NativeAppEventEmitter,
    android: () => DeviceEventEmitter,
});

interface OtpTimerProps {
    /**
     * timer showing minutes
     */
    minutes?: number;
    /**
     * timer showing seconds
     */
    seconds?: number;
    /**
     * timer to stop ticking
     */
    stopTimer?: boolean;
    /**
     * styling of otp timer
     */
    timerStyle?: StyleProp<TextStyle>;
    /**
     * text content of resend button
     */
    resendButtonText?: string;
    /**
     * styling of resend button
     */
    resendButtonStyle: StyleProp<ViewStyle>;
    /**
     * styling of resend button text
     */
    resendButtonTextStyle: StyleProp<TextStyle>;
    /**
     * action to perform after clicking resend button
     */
    resendButtonAction: () => void;
}

const OtpTimer = (props: OtpTimerProps): JSX.Element => {

    const { language } = getEssentials();

    const [minutes, setMinutes] = useState<number>(
        props.minutes ? props.minutes : 0
    );
    const [seconds, setSeconds] = useState<number>(
        props.seconds ? props.seconds : 0
    );
    const [isTimerActive, setIsTimerActive] = useState<boolean>(true);

    useEffect(() => {
        let countDown: NodeJS.Timeout;
        if (isTimerActive) {

            countDown = BackgroundTimer.setInterval(() => {
                if (!seconds) {
                    if (!minutes) {
                        BackgroundTimer.clearInterval(countDown);
                    } else {
                        setSeconds(59);
                        setMinutes((minutes) => minutes - 1);
                    }
                }
                if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                }
            }, 1000);

           /* countDown = setInterval(() => {
                if (!seconds) {
                    if (!minutes) {
                        clearInterval(countDown);
                    } else {
                        setSeconds(59);
                        setMinutes((minutes) => minutes - 1);
                    }
                }
                if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                }

            }, 1000);*/
        }

        if (!minutes && !seconds) {
            setIsTimerActive(false);
        }
        return () => {
            BackgroundTimer.clearInterval(countDown);
            // BackgroundTimer.stopBackgroundTimer();
        }
    }, [seconds, minutes, isTimerActive]);

    const handleButton = () => {
        setMinutes(props.minutes ? props.minutes : 0);
        setSeconds(props.seconds ? props.seconds : 0);
        setIsTimerActive(true);
        props.resendButtonAction();
    };

    return (
        <View style={styles.otpViewStyle}>
            {!minutes && !seconds ? (
                props.resendButtonText ? (
                    <TouchableOpacity
                        style={props.resendButtonStyle}
                        onPress={handleButton}
                    >
                        <Text style={props.resendButtonTextStyle}>
                            {props.resendButtonText}
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={props.resendButtonStyle}
                        onPress={handleButton}
                    >
                        <Text style={props.resendButtonTextStyle}>Resend</Text>
                    </TouchableOpacity>
                )
            ) : (
                <Text style={props.timerStyle}>
                    {language?.language?.input_fields_texts.it_resend_confirmation_code + " ( " + (minutes < 10 ? `0${minutes}` : minutes) + " : " + (seconds < 10 ? `0${seconds}` : seconds) + " )"}
                </Text>
            )}
        </View>
    );
};

export default OtpTimer;
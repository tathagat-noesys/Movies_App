import React, { useEffect, useState } from "react";

const ClockTimer = (): JSX.Element => {
  const [clock, setClock] = useState<string>(new Date().toUTCString());

  const clockSettingFunction = (): string => {
    return new Date().toUTCString();
  };

  useEffect(() => {
    let id = setInterval((): void => {
      setClock(clockSettingFunction());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <div>{clock}</div>;
};

export default ClockTimer;

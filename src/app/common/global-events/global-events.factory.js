let GlobalEvents = () => {
  let events = {};

  return {
    off: (eventHandle) => {
      let index = events[eventHandle.eventName].findIndex((singleEventHandler) => {
        return singleEventHandler.id !== eventHandle.handlerId;
      });

      events[eventHandle.eventName].splice(index, 1);
    },
    on: (eventName, handlerCallback) => {
      if (!events[eventName]) {
        events[eventName] = [];
      }
      let handlers = events[eventName];
      let newHandlerId = new Date().getTime();
      handlers.push({
        id: newHandlerId,
        callback: handlerCallback
      });
      return {
        id: newHandlerId,
        eventName
      };
    },
    trigger: (eventName, data) => {
      if (events[eventName]) {
        events[eventName].forEach((singleHandler) => {
          singleHandler.callback(data);
        });
      }
    }
  };
};

export default GlobalEvents;

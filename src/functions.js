/**
 * Create Validation alert
 * @param {*} msg 
 * @param {*} type 
 * @returns 
 */

const createAlert = (msg, type = "danger") => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
};

    
/**
 * check a email is email
 * @param {*} email 
 * @returns 
 */
const isEmail = (email) => {
    const pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}.[a-z]{2,4}$/;
    return pattern.test(email);
};

/**
 * Check a phone is phone number
 * @param {*} phone 
 * @returns 
 */
const isPhone = (phone) => {
    const pattern = /^(\+8801|8801|01)[0-9]{9}$/;
    return pattern.test(phone);
};

//unique id genarate
const createID = () => {
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    const machineId = 'xxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    });
    const processId = Math.floor(Math.random() * 10000).toString(16).padStart(4, '0');
    const counter = Math.floor(Math.random() * 10000).toString(16).padStart(4, '0');

    return timestamp + machineId + processId + counter;
};

//Post Date

const timeAnukul = (postDate) => {
    const currentDate = new Date();
    const diff = currentDate - postDate;
  
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 7) {
      return postDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } else if (days > 1) {
      return `${days} days ago`;
    } else if (days === 1) {
      return "Yesterday";
    } else if (hours >= 1) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes >= 1) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };
  

class Validate {
    checkName = (name) => {
        if (name === "") {
            return "trống";
        } else if (name.length < 3) {
            return " yêu cầu ít nhất 3 ký tự";
        } else if (!name.match(/^[A-Za-z]+$/)) {
            return " không hợp lệ";
        }
        return false
    };
}

export const validate = new Validate()
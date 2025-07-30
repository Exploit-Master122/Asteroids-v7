// src/utils/vector3.js (if using plain JS) or add to utils/math.ts
export class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    normalize() {
        const len = this.length();
        if (len > 0) {
            return this.multiplyScalar(1 / len);
        }
        return this;
    }

    clone() {
        return new Vector3(this.x, this.y, this.z);
    }

    // Static helper
    static distance(v1, v2) {
        const dx = v1.x - v2.x;
        const dy = v1.y - v2.y;
        const dz = v1.z - v2.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

// Example usage (in an entity update method):
// const desiredVelocity = target.clone().sub(this.position).normalize().multiplyScalar(this.maxSpeed);
// const steering = desiredVelocity.sub(this.velocity);
// this.acceleration.add(steering);

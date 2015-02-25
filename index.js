/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Schmoopiie
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var locally = require('locallydb');
var q       = require('q');

module.exports = function(opt) {
    var options = opt || {};

    // Multiple ways to accept the configuration for the database..
    try { options = opt.getOptions().options || {}; }
    catch(err) {
        if (opt && opt.options) { options = opt.options; }
        else { options = opt || {}; }
    }

    var path = (typeof options.database != 'undefined') ? options.database : './database';
    var db   = new locally(path);

    return {
        // Insert an object or an array of object to the database..
        insert: function insert(collection, elements) {
            var col = db.collection(collection);
            return q.fcall(function () {
                return col.insert(elements);
            });
        },
        // Retrieve elements using an object or an operator..
        where: function where(collection, query) {
            var col = db.collection(collection);
            return q.fcall(function () {
                return col.where(query);
            });
        },
        // Retrieve an element by cid..
        get: function get(collection, cid) {
            var col = db.collection(collection);
            return q.fcall(function () {
                return col.get(cid) || null;
            });
        },
        // List all elements in the collection..
        list: function list(collection) {
            var col = db.collection(collection);
            return q.fcall(function () {
                return col.items;
            });
        },
        // Update an element, it will add un-existed key and replace existed..
        update: function update(collection, cid, object) {
            var col = db.collection(collection);
            return q.fcall(function () {
                return col.update(cid, object);
            });
        },
        // Replace the element with the same cid..
        replace: function replace(collection, cid, object) {
            var col = db.collection(collection);
            return q.fcall(function () {
                return col.replace(cid, object);
            });
        },
        // Delete an item by cid..
        remove: function remove(collection, cid) {
            var col = db.collection(collection);
            return q.fcall(function () {
                return col.remove(cid);
            });
        }
    }
};
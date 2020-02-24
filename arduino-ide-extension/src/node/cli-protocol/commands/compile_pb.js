/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var commands_common_pb = require('../commands/common_pb.js');
goog.object.extend(proto, commands_common_pb);
goog.exportSymbol('proto.cc.arduino.cli.commands.CompileReq', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.CompileResp', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.CompileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cc.arduino.cli.commands.CompileReq.repeatedFields_, null);
};
goog.inherits(proto.cc.arduino.cli.commands.CompileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cc.arduino.cli.commands.CompileReq.displayName = 'proto.cc.arduino.cli.commands.CompileReq';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cc.arduino.cli.commands.CompileReq.repeatedFields_ = [8,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.CompileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.CompileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.CompileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && commands_common_pb.Instance.toObject(includeInstance, f),
    fqbn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sketchpath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    showproperties: jspb.Message.getFieldWithDefault(msg, 4, false),
    preprocess: jspb.Message.getFieldWithDefault(msg, 5, false),
    buildcachepath: jspb.Message.getFieldWithDefault(msg, 6, ""),
    buildpath: jspb.Message.getFieldWithDefault(msg, 7, ""),
    buildpropertiesList: jspb.Message.getRepeatedField(msg, 8),
    warnings: jspb.Message.getFieldWithDefault(msg, 9, ""),
    verbose: jspb.Message.getFieldWithDefault(msg, 10, false),
    quiet: jspb.Message.getFieldWithDefault(msg, 11, false),
    vidpid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    exportfile: jspb.Message.getFieldWithDefault(msg, 13, ""),
    jobs: jspb.Message.getFieldWithDefault(msg, 14, 0),
    librariesList: jspb.Message.getRepeatedField(msg, 15),
    optimizefordebug: jspb.Message.getFieldWithDefault(msg, 16, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.CompileReq}
 */
proto.cc.arduino.cli.commands.CompileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.CompileReq;
  return proto.cc.arduino.cli.commands.CompileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.CompileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.CompileReq}
 */
proto.cc.arduino.cli.commands.CompileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new commands_common_pb.Instance;
      reader.readMessage(value,commands_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFqbn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSketchpath(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowproperties(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreprocess(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildcachepath(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildpath(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addBuildproperties(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarnings(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerbose(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuiet(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setVidpid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setExportfile(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJobs(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addLibraries(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOptimizefordebug(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.CompileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.CompileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.CompileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      commands_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getFqbn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSketchpath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getShowproperties();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPreprocess();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getBuildcachepath();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBuildpath();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBuildpropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getWarnings();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getVerbose();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getQuiet();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getVidpid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getExportfile();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getJobs();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getLibrariesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getOptimizefordebug();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.Instance}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.Instance} */ (
    jspb.Message.getWrapperField(this, commands_common_pb.Instance, 1));
};


/** @param {?proto.cc.arduino.cli.commands.Instance|undefined} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setInstance = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.cc.arduino.cli.commands.CompileReq.prototype.clearInstance = function() {
  this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string fqbn = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getFqbn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setFqbn = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sketchPath = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getSketchpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setSketchpath = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool showProperties = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getShowproperties = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setShowproperties = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool preprocess = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getPreprocess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setPreprocess = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string buildCachePath = 6;
 * @return {string}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getBuildcachepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setBuildcachepath = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string buildPath = 7;
 * @return {string}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getBuildpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setBuildpath = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string buildProperties = 8;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getBuildpropertiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<string>} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setBuildpropertiesList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.addBuildproperties = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.cc.arduino.cli.commands.CompileReq.prototype.clearBuildpropertiesList = function() {
  this.setBuildpropertiesList([]);
};


/**
 * optional string warnings = 9;
 * @return {string}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getWarnings = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setWarnings = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool verbose = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getVerbose = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setVerbose = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool quiet = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getQuiet = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setQuiet = function(value) {
  jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string vidPid = 12;
 * @return {string}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getVidpid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setVidpid = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string exportFile = 13;
 * @return {string}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getExportfile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setExportfile = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 jobs = 14;
 * @return {number}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getJobs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setJobs = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * repeated string libraries = 15;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getLibrariesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/** @param {!Array<string>} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setLibrariesList = function(value) {
  jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.addLibraries = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


proto.cc.arduino.cli.commands.CompileReq.prototype.clearLibrariesList = function() {
  this.setLibrariesList([]);
};


/**
 * optional bool optimizeForDebug = 16;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.CompileReq.prototype.getOptimizefordebug = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 16, false));
};


/** @param {boolean} value */
proto.cc.arduino.cli.commands.CompileReq.prototype.setOptimizefordebug = function(value) {
  jspb.Message.setProto3BooleanField(this, 16, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.CompileResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.CompileResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cc.arduino.cli.commands.CompileResp.displayName = 'proto.cc.arduino.cli.commands.CompileResp';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.CompileResp.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.CompileResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.CompileResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.CompileResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    outStream: msg.getOutStream_asB64(),
    errStream: msg.getErrStream_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.CompileResp}
 */
proto.cc.arduino.cli.commands.CompileResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.CompileResp;
  return proto.cc.arduino.cli.commands.CompileResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.CompileResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.CompileResp}
 */
proto.cc.arduino.cli.commands.CompileResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOutStream(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setErrStream(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.CompileResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.CompileResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.CompileResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.CompileResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutStream_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getErrStream_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes out_stream = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cc.arduino.cli.commands.CompileResp.prototype.getOutStream = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes out_stream = 1;
 * This is a type-conversion wrapper around `getOutStream()`
 * @return {string}
 */
proto.cc.arduino.cli.commands.CompileResp.prototype.getOutStream_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOutStream()));
};


/**
 * optional bytes out_stream = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOutStream()`
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.CompileResp.prototype.getOutStream_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOutStream()));
};


/** @param {!(string|Uint8Array)} value */
proto.cc.arduino.cli.commands.CompileResp.prototype.setOutStream = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes err_stream = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cc.arduino.cli.commands.CompileResp.prototype.getErrStream = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes err_stream = 2;
 * This is a type-conversion wrapper around `getErrStream()`
 * @return {string}
 */
proto.cc.arduino.cli.commands.CompileResp.prototype.getErrStream_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getErrStream()));
};


/**
 * optional bytes err_stream = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getErrStream()`
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.CompileResp.prototype.getErrStream_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getErrStream()));
};


/** @param {!(string|Uint8Array)} value */
proto.cc.arduino.cli.commands.CompileResp.prototype.setErrStream = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.cc.arduino.cli.commands);
